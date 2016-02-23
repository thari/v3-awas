grammar Antlr4Awas;

@header {
// @formatter:off
}

modelFile
  : model EOF
  ;

model
  : ( 'types' typeDecl* )?
    ( 'constants' constantDecl* )?
    ( 'components' componentDecl* )?
    ( 'connections' connectionDecl* )?
  ;

typeDecl
  : typeAliasDecl                 #AliasTypeDecl
  | enumDecl                      #EnumTypeDecl
  | latticeDecl                   #LatticeTypeDecl
  | recordDecl                    #RecordTypeDecl
  ;

componentDecl
  : name
      ( 'ports' port* )?
      ( 'flows' flow* )?
      ( 'behaviour' behaviour)?
      ( 'properties' property* )?

  ;

connectionDecl
  : connName=name ':'
    fromComponent=name '.' fromPort=ID
    ( '{' fromE+=name ( ',' fromE+=name )* '}' )?
    '->'
    toComponent=name '.' toPort=ID
    ( '{' toE+=name ( ',' toE+=name )* '}' )?
    ( 'behaviour' behaviour)?
    ( 'properties' property* )?
  ;

typeAliasDecl
  : 'alias' name '=' type
  ;

enumDecl
  : // enum elements can be defined in the profile
    'enum' n=name
    ( 'extends' supers+=name ( ',' supers+=name )* )?
    (
      '{' elements+=ID ( ',' elements+=ID )* '}'
    )?
  ;

latticeDecl
  : 'lattice' n=name
    ( 'extends' supers+=name ( ',' supers+=name )* )?
  ;

recordDecl
  : 'record' name
      field+
  ;

field
  : ID ':' type
  ;

port
  : mod=( 'in' | 'out' ) ID ( ':' name )?
  ;

flow
  : id=ID ':'
    ( from=ID '{' fromE+=name ( ',' fromE+=name )* '}' | '_' )
    '->'
    ( to=ID '{' toE+=name ( ',' toE+=name )* '}' | '_' )
  ;

property
  : ID ':' type ( '=' init )?
  ;

constantDecl
  : name ':' type '=' init
  ;

behaviour
  : expression+
  ;

expression
  : key=tuple '->' value=tuple
  ;

tuple
  : one
  | '(' one (',' one)+ ')'
  ;

one
  : '*'                                              #NoFailure
  | '_'                                              #WildCard
  | ID                                               #variable
  | name '.' ID                                      #FaultRef
  | '{' one (',' one)+ '}'                           #FaultSet
  ;

type
  : basicType                                        #BaseType
  | 'Option' '[' type ']'                            #OptionType
  | 'Set' '[' type ']'                               #SetType
  | 'Seq' '[' type ']'                               #SeqType
  | 'Map' '[' key=type ',' value=type ']'            #MapType
  ;

basicType
  : 'Boolean'                                        #BooleanType
  | 'Integer'
     ( '(' lo=intConstant ',' hi=intConstant ')' )?  #IntegerType
  | 'Real'                                           #RealType
  | 'String'                                         #StringType
  | 'Component'                                      #ComponentType
  | 'Port'                                           #PortType
  | name                                             #NamedType
  ;

intConstant
  : INTEGER                                          #LitIntConstant
  | name                                             #NamedIntConstant
  | '_'                                              #ArbitraryIntConstant
  ;

init
  : 'true'                                           #True
  | 'false'                                          #False
  | INTEGER                                          #Integer
  | REAL                                             #Real
  | STRING                                           #String
  | name '(' ID '=' init ( ',' ID '=' init )* ')'    #Record
  | name ( '.' ID )?                                 #NameRef
  | 'None' '[' type ']'                              #None
  | 'Some' '[' type ']' '(' init ')'                 #Some
  | 'Set' '[' type ']'
    '(' ( init ( ',' init )* )? ')'                  #Set
  | 'Seq' '[' type ']'
    '(' ( init ( ',' init )* )? ')'                  #Seq
  | 'Map'
     '[' key=type ',' value=type ']'
    '(' (  mapEntry ( ',' mapEntry )* )? ')'         #Map
  ;

mapEntry
  : key=init '->' value=init
  ;

name
  : ID ( '::' ID )*
  ;

/* TODO: nested component
enclosureDecl
  : 'enclosure' ID
      ( 'ports' port* )?
  ;
*/

/* TODO: nested component
enclosureAssembly
  : 'assembly' ID 'for' name
      ( 'ports' portAlias* )?  // TODO: properties propagation
  ;
*/

/* TODO: states and transitions
states
  : 'states' '=' '[' ID ( ',' ID )* ']' // the initial state is the first declared one
      ( 'transitions' transition* )?
  ;

transition
  : fromState=ID '-[' TODO ']->' toState=ID
  ;
*/

/* TODO: intra-flow
flow
  : 'flow' id=ID ':' fromPort=ID '->' toPort=ID
  ;
*/

/* TODO: nested component
portAlias
  : mod=( 'in' | 'out' ) id=ID ( 'as' alias=ID )?
  | id=ID 'as' alias=ID
  ;
*/

INTEGER
  : '0' | [1-9] [0-9]*
  ;

REAL
  : ( '0' | [1-9] [0-9]* ) '.' [0-9]+
  ;

STRING
  : '\"' ( ~["] | '"' '"' )* '\"'
  ;

ID
  : [a-zA-Z$_] [a-zA-Z0-9$_]*
  | '`' ~[\r\n\t\u000C`]+ '`'
  ;

WS
  : [ \r\n\t\u000C]+ -> skip
  ;

COMMENT
  : '/*' .*? '*/' -> skip
  ;

LINE_COMMENT
  : '//' ~[\r\n]* -> skip
  ;

ERROR_CHAR
  : .
  ;
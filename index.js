let a =3;
let b = 5;
let c;
let expressions = 
`
let a = 3;
let b = 5;
let c; 
----------
a + b = ${a+b} 
a - b = ${a-b}
a * b = ${a*b}
a / b = ${a/b}
a % b = ${a%b}
a += b = ${a+=b}
a -= b = ${a-=b} 
a *= b = ${a*=b}
a /= b = ${a/=b}
a %= b = ${a%=b}
a == b = ${a==b}
a != b = ${a!=b}
a > b = ${a>b}
a < b = ${a<b}
!a && !c  = ${!a && !c}
!a || !c  = ${!a || !c }
`;
console.log(expressions);



let first_name = "Jeevan";
let last_name = "Joudi";
let email = "joud@gmail.com";
let output = `My name is ${first_name} ${last_name}. You can contact me at ${email}.`;
console.log(output);
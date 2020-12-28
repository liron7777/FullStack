/*!* ------------------------------------ this --------------------------------------- *!*/
/*!* ---------------- example1 ---------------- *!*/
console.log('window',window);
console.log('this',this);

/*!* ---------------- example3 ---------------- *!*/
let user ={
    name:'liron',
    print_name(){
        console.log('this in function', this.name);
    }
}
user.print_name()

/*!* ---------------- example3 ---------------- *!*/
let sum_45 = {
    a: 10,
    b: 15,
    c: 20,
    get_sum:function (){
        let 
           a = this.a,
           b = this.b,
           c = this.c
        function sum() {
            console.log('sum_45-',a+b+c);
        }
        return sum()
    }
}
sum_45.get_sum()

/*!* ---------------- example4 ---------------- *!*/
let sum_45_2 = {
    a: 10,
    b: 15,
    c: 20,
    get_sum:function (){
        let this_v = this
        function sum() {
            console.log('sum_45_2-',this_v.a+this_v.b+this_v.c);
        }
        return sum()
    }
}
sum_45_2.get_sum()

/*!* ---------------- example5 ---------------- *!*/
let sum_45_3 = {
    a: 10,
    b: 15,
    c: 20,
    get_sum:function (){
        sum = () => {
            console.log('sum_45_3-',this.a+this.b+this.c);
        }
        return sum()
    }
}
sum_45_3.get_sum()


/*!* ------------------------------------ call --------------------------------------- *!*/
sum_45_2.get_sum.call(sum_45_2)


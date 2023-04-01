function greet(name) {  
    if(name==null){return "Hello there!"}
    if (typeof name === 'string'){
        if(name!=name.toUpperCase()){
            return "Hello, " + name;
        }else{return "HELLO " + name;}}
    if (Array.isArray(name)){return "Hello "+name.join(", ")}
    }

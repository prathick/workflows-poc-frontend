class SimpleHelper{
    generateRandomNumber = ()=>{
        return Math.random()
    }
    generateRandomInt = (min,max)=>{
        min=min||0
        max=max||10
        return Math.floor(Math.random() * max) + min  
    }
}

export default SimpleHelper
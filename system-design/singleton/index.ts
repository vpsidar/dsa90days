class Singleton {
    private static instance: Singleton;

    private constructor(){

    }

    public static getInstance() {
        if(!Singleton.instance){
            this.instance = new Singleton();
        }
        return this.instance;
    }
}

const s1 = Singleton.getInstance();
const s2 =  Singleton.getInstance();
if(s1===s2) {
    console.log('same object');
} else {
    console.log('Not the single object');
}
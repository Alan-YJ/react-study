class SafeObserver{
    isUnsubscribed = fasle
    constructor(destination){
        this.destination = destination
    }

    next(value){
        if(!this.isUnsubscribed&&this.destination.next){
            try{
                this.destination.next(value)
            }catch(err){
                this.unsubscribe()
                throw err
            }
        }
    }

    error(err){
        if(!this.isUnsubscribed&&this.destination.error){
            try{
                this.destination.error(err)
            }catch(err){
                this.unsubscribe()
                throw err
            }
        }
    }

    complete(){
        if(!this.isUnsubscribed&&this.destination.complete){
            try{
                this.destination.complete()
            }catch(err){
                this.unsubscribe()
                throw err
            }
        }
    }

    unsubscribe(){
        this.isUnsubscribed = true
        if(this.unsub){
            this.unsub()
        }

    }
}
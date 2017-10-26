//============================================================================================================//
//====== ITEM ================================================================================================//
//============================================================================================================//


//====== RESTAURANT
function Item () {
    this.initItem = function(location, radius, types, rating, msg) {
        this.location = location;
        this.radius = radius;
        this.types = types;
        this.rating = rating;
        this.msg = msg;
        console.log(`init item`,this.msg, this.location, this.radius, this.types)
    }

}

const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    name: { type: String, default: null },
    icon: { type: String, default: null },
})

const fareSchema = new mongoose.Schema({
    availability: { type: String, default: null },
    flightPrice: { type: String, default: null },
    flightsPrice3rd4thPax: { type: String, default: null },
    gradeCode: { type: String, default: null },
    gradeName: { type: String, default: null },
    price: { type: String, default: null },
    price2ndPax: { type: String, default: null },
    price3rd4thPax: { type: String, default: null },
    priceSingle : {type: String, default: null},
}
);

const fareSetSchema = new mongoose.Schema({
    fare_set_name: { type: String, default: null },
    airport_code: { type: String, default: null },
    deal_code: { type: String, default: null },
    fares: [fareSchema]  
}
);


const itinerarySchema = new mongoose.Schema(
    {
        category: { type: String, default: null },
        port: { type: String, default: null },
        check_in_date: { type: String, default: null },
        check_out_date: { type: String, default: null },
        description : { type : String , default : null},
    }
);
const  formScehma = new mongoose.Schema({
    name : {
        type : String,
        default : null
    },
    reference : {
         type :  String,
         default : null
    },
    operator : {
        type :  String,
        default : null
    },
    ship : {
        type :  String,
        default : null
    },
    region : {
        type :  String,
        default : null
    },
    general_type : {
        type :  String,
        default : null
    },
    general_Start : {
        type :  String,
        default : Date.now
    },
    general_end : {
        type :  String,
        default : Date.now
    },
    general_categories : {
         type :  String,
         default : null
    },
    general_range : {
        type :  String,
        default : null
    },
    cruise_image : {
        type :  String,
        default : null
    },
    sales_banner_image : {
        type : String,
        default : null
    },
    cruise_banner_image : {
        type :  String,
        default : null
    },
    mobile_cruise_banner_image : {
        type :  String,
        default : null
    },
    summary : {
        type :  String,
        default : null
    },
    sales_message : {
        type : String,
        default : null
    },
    text_banner : {
        type : String,
        default : null
    },
    overview : {
        type : String,
        default : null
    },
    whats_included : {
        type : String,
        default : null
    },
    extras : {
        type : String,
        default : null
    },
    package_cruise_value1: {
        type : String,
        default : null
    },
    package_cruise_value2: {
        type : String,
        default : null
    },
    package_cruise_value3: {
        type : String,
        default : null
    },
    package_cruise_value4: {
        type : String,
        default : null
    },
    package_cruise_value5: {
        type : String,
        default : null
    },
    package_cruise_value6: {
        type : String,
        default : null
    },
    fare_sets: [fareSetSchema],
    adjustment_type : {
        type : String,
        default : null
    },
    adjustment_amount : {
        type : String,
        default : null 
    },
    restrict_start_date : {
        type : String ,
        default : Date.now
    },
    restrict_end_date : {
        type : String,
        default : Date.now 
    },
    itinerary : [itinerarySchema],
    options_name : {
        type : String,
        default : null
    },
    options_amount:{
        type : String,
        default : null
    },
    options_select :{
        type : String,
        default : null
    },
    tour_title : {
        type : String,
        default : null
    },
    tour : [tourSchema],
})


const formSchemaModel = mongoose.model('formSchemaModel', formScehma);

module.exports = formSchemaModel;
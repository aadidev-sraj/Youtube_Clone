export const API_KEY = 'AIzaSyB14tcc6xJkZf7M6mr2qX2xi9szWCl7DCM';

export const value_converter = (value) =>{
    if(value>=1000000)
        {
            return Math.floor(value/1000000)+"M";
        }
    else if(value>=1000)
        {
            return Math.floor(value/1000)+"K";
        }
    else{
        return value;
    }
}
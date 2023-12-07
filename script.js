$(document).ready(function(){
    get_details()
})

function get_details(){
    var acidValues = ["H2So4","HCL","HNO3","HNO4","H2CO2"]
    var baseValues = ["NaOH","KOH","HI","H2CO3" ,"Mg(OH)2"]
        for (let i = 0; i < acidValues.length; i++) {
        var element = `<p>${acidValues[i]}</p><br/>`;
        $(".acid").append(element)
        
    }

    for (let i = 0; i < baseValues.length; i++) {
        var element = `<p>${baseValues[i]}</p><br/>`;
        $(".base").append(element)
        
    }
}
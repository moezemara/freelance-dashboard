var CategoriesList = ['web development', 'artificial intellegence', 'machine learning',
'wireframing', 'communication','software development','front end', 'back end','Do any thing'
];

var GenderList = ['male','female','others'];


const getCategoriesList = ()=>{
    return (  
        CategoriesList.map((category)=>(<option>{category}</option>))
 );
}

const getGenderList = ()=>{ //neglect this now
    return (  
        GenderList.map((gender)=>(<option>{gender}</option>))
 );
}

export {getCategoriesList, getGenderList}
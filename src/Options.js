var CategoriesList = ['web development', 'artificial intellegence', 'machine learning',
'wireframing', 'communication','software development','front end', 'back end',
'logo design', 'copywriting', 'content writing','andoid development', 'database managment',
'web scrapping', 'automation', 'resume writing', 'game development', 'marketing', 'data analysis',
'Do any thing'
];

var GenderList = ['male','female'];


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
var CategoriesList = ['web development', 'artificial intellegence', 'machine learning',
'wireframing', 'communication','software development','front end', 'back end','Do any thing'
]


const getCategoriesList = ()=>{
    return (  
        CategoriesList.map((category)=>(<option>{category}</option>))
 );
}

const getCategoriesList2 = ()=>{
    return (  
        CategoriesList.map((category)=>(<option>{category}</option>))
 );
}

export {getCategoriesList, getCategoriesList2}
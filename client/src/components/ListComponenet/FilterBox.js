
const LISTING_TYPES = {
    FULL_TIME: 'Full Time',
    PART_TIME: 'Part Time',
    CONTRACT: 'Contract'
  };
  
  const ROLES = {
    FRONTEND: 'frontend',
    FULL_STACK: 'Fullstack',
  };
  
  const LEVELS = {
    SENIOR: 'senior',
    MID_WEIGHT: 'MidWeight',
    JUNIOR: 'Junior'
  };
  
  const LANGUAGES = {
    HTML: 'html',
    CSS: 'css',
    JS: 'javascript',
    PYTHON: 'python',
  };
  
  const TOOLS = {
    REACT: 'React',
    SASS: 'Sass',
  };
const FilterBox = (props) => {
    const data  = [ {
        isFeatured: true,
        listingTitle: "Senior Frontend Developer",
        listedCompany: "Photosnap",
        listingLocation: "USA only",
        timeRegistered: "02/10/2021",
        listingType: LISTING_TYPES.FULL_TIME,
        role: ROLES.FRONTEND,
        level: LEVELS.SENIOR,
        languages: [LANGUAGES.HTML, LANGUAGES.CSS, LANGUAGES.JS]
      },
      {
        isFeatured: true,
        listingTitle: "Fullstack Developer",
        listedCompany: "Manage",
        listingLocation: "Remote",
        timeRegistered: "02/10/2021",
        listingType: LISTING_TYPES.PART_TIME,
        role: ROLES.FULL_STACK,
        level: LEVELS.MID_WEIGHT,
        languages: [LANGUAGES.PYTHON,   LANGUAGES.JS],
        tools: [TOOLS.REACT]
      },]
    console.log(data);

    let search;
    function findJob(e){
        console.log(e.value);
    }


    return 
        <input id="search" onChange={findJob}>
            Enter Filter Functionality here      
        </input>>
    
}

export default FilterBox;
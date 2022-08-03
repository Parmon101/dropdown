Dropdown

Project create from CRA + TS + CSS modules.

Install: 
- git clone https://github.com/Parmon101/dropdown.git
- npm i
- npm start`


Start page
<img width="501" alt="image" src="https://user-images.githubusercontent.com/48516892/182570386-f932fd5f-5318-46b9-b8e9-cac92e254757.png">

  In the Dropdown component, there are flags(state) to configure.

    const [isShowLang, _setIsShowLang] = React.useState(true); // show/hide img language
    const [isSearch, _setIsSearch] = React.useState(true);  // show/hide component Search
    const [isMulty, _setIsMulty] = React.useState(true);  // on/off functional add one or multy item

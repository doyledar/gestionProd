import React from 'react'
import styles from './layout.dropdownmodule.css'


class ArticlesDropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown" style = {{background:"red",width:"200px"}} >
         <div className="button" onClick={this.showDropdownMenu}> Articles </div>

          { this.state.displayMenu ? (
          <ul>
            <li><a className="active" href="#Create Page">Nouveau</a></li>
            <li><a href="#Manage Pages">Modifier</a></li>
            <li><a href="#Create Ads">Supprimer</a></li>
          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

export default ArticlesDropdown;
import inquirer from 'inquirer'
import chalk from 'chalk'
import fs from 'fs'



let array = ["border-box", "font-family", "background", "font-size"] 

list()

function list() {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'what do you want?',
          choices: [
            'View Property',
            'Add Property',
            'remove Property',
            'exit',
          ],
        },
      ])
      .then((answer) => {
        let action = answer['action']
  
        if (action === 'View Property') {
            showListProp()
        } else if (action === 'Add Property') {
            insertListProp()
        } else if (action === 'remove Property') {
            delListProp()
        } else if (action === 'exit') {
            console.log('exit')
            exit()
           
        }
      })
  }

  function back(){
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'back',
          message: 'Do you want to go back to the Menu?',
          choices: [
            'yes',
            'No',
          ],
        },
      ])
      .then((answer) => {
        let back = answer['back']
  
        if (back === 'Yes') {
            list()
        } else if (back === 'No') {
            console.log('Exit')
            exit()   
        }
      })
  }

  function showListProp(){
    console.log("CSS list:", array.sort())
    back()

  }
 
  function insertListProp() {
    inquirer
      .prompt([
        {
          name: 'insert',
          message: 'Enter a property:',
        },
      ])
      .then((answer) => {
        let propCss = answer['insert']
  
        if (!array.includes(propCss)) {
          array.push(propCss)
          console.log(chalk.green('Property entered successfully'))
          console.log("Css list:", array.sort())
          return back()
        }
        else{
          console.log(chalk.bgRed.black('This property has already been added.'))
          insertListProp()
        }
      })
  }

  function delListProp(){
    inquirer
      .prompt([
        {
          name: 'remove',
          message: 'Enter a property to remove:',
        },
      ])
      .then((answer) => {
        let delCSS = answer['remove']
      
        if (array.includes(delCSS)) {
          let findFor = delCSS
          let index = array.indexOf(findFor);
          while(index >= 0){
            array.splice(index, 1);
            index = arr.indexOf(findFor);}

          console.log(chalk.bgGreen.black('Property Removed with successful...'))
          console.log("list Css:", array.sort())
          return back()
        }
        else {
          console.log(chalk.bgRed.black('this property has already been removed.'))
          console.log("list Css:", array.sort())
          return back()
          
        }
      })
   }

  function exit(){
    console.log("list Css:", array.sort())
    console.log(chalk.bgYellow.black('the end...'))
    process.exit()

  }
// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //

//create a function taking id, nameFirst,nameLast) creat and object with dot notation making each parameter a value in the object
function makeContact(id, nameFirst, nameLast) {
        var contactList = {};
        contactList.id = id;
        contactList.nameFirst = nameFirst;
        contactList.nameLast = nameLast;
        return contactList
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts= []
    
    return {
        // we implemented the length api for you //
        // use .length to result the length of contacts
        length: function() {
            return contacts.length;
        },
        
        // use .push to add contacts
        addContact: function(contact) {
            contacts.push(contact);
        },
        
        //use loop to read all contacts and return the object if name is found 
        findContact: function(fullName){
            
            for (var name of contacts){
                if (name.nameFirst + " " + name.nameLast === fullName) {
                return name;
            } else {
                return undefined 
            }
            }
            
        },
        
        //use .shift to remove contact
        removeContact: function(contact){
            contacts.shift(contact);
        },
        
        //printAllContactNames() Function should return a String formated with all the full-names
        printAllContactNames: function(){
        //create new array allNamesArray    
            var allNamesArray =[]
           
           //use loop to push the nameFirst + nameLast as a combined string into the arral allNamesArray 
            for(var name of contacts){
                allNamesArray.push(name.nameFirst + " " + name.nameLast) 
            }
            //return all the strings as one new string separated by line-breaks
            return allNamesArray.join("\n")
        }
        
    }
    
    
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}

import React from 'react';

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          name: 'Contact 1 name',
          surname: 'Contact 1 surname',
          phone: '1234567',
          id: 1
        },
        {
          name: 'Contact 2 name',
          surname: 'Contact 2 surname',
          phone: '1234566',
          id: 2
        },
        {
          name: 'Contact 3 name',
          surname: 'Contact 3 surname',
          phone: '1234565',
          id: 3
        },
        {
          name: 'Contact 4 name',
          surname: 'Contact 4 surname',
          phone: '1234564',
          id: 4
        }
      ]
    }
  }

  render() {
    return (
      <div role="list">
        <ul className="contact-list">
          {this.state.contacts.map(function(contact, i){
            // eslint-disable-next-line
            return <li key={i} role="listitem">
              <span><strong>Name:</strong> {contact.name}</span>
              <span><strong>Surname:</strong> {contact.surname}</span>
              <span><strong>Tel:</strong> <a href={`tel:${contact.phone}`}>{contact.phone}</a></span>
            </li>
          })}
        </ul>
      </div>
    );
  }
}
export default ContactList;

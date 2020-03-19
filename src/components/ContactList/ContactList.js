import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import Contact from '../Contact/Contact';
import List from './ContactList.styled';
import Slide from '../../transition/slide.transition';

const ContactList = ({ items, onDeleteContact }) =>
  items.length > 0 && (
    <TransitionGroup component={List}>
      {items.map(item => (
        <Slide key={item.id}>
          <Contact {...item} onDeleteContact={() => onDeleteContact(item.id)} />
        </Slide>
      ))}
    </TransitionGroup>
  );

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;

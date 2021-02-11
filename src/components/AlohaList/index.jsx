import React from 'react';
import Aloha from '../Aloha';

function AlohaList(props) {
  const {deleteUsers} = props;
  const mapAloha = ({ firstName, lastName, id }) => (
    <Aloha key={id} id={id} name={`${firstName} ${lastName}` } deleteUsers={deleteUsers} />
  );

  const { users } = props;
  return <section>{users.map(mapAloha)}</section>;
}

export default AlohaList;

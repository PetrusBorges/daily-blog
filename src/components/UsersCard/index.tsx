import UserNotFoundImage from '../../assets/icons/pageHeaderUsers.svg';

import { Container, Content, CardUser, CardUserInfo } from './styles';

import { UsersCardProps } from '../../types/usersCard';

export function UsersCard({ userCard }: UsersCardProps) {
  return (
    <Container>
      <Content>
        {userCard.map((userCard) => (
          <CardUser
            key={userCard.id}
          >
            <img src={UserNotFoundImage} alt="UserNotFoundImage" />

            <CardUserInfo>
              <p><span>Nome: </span>{userCard.name}</p>
              <p><span>Usuário: </span>{userCard.username}</p>
              <p><span>Email: </span>{userCard.email}</p>
              <p><span>Endereço: </span>{userCard.address.street}</p>
              <p><span>Número: </span>{userCard.address.suite}</p>
              <p><span>Cidade: </span>{userCard.address.city}</p>
              <p><span>CEP: </span>{userCard.address.zipcode}</p>
              <p><span>Latitude: </span>{userCard.address.geo.lat}</p>
              <p><span>Longitude: </span>{userCard.address.geo.lng}</p>
              <p><span>Telefone: </span>{userCard.phone}</p>
              <p><span>Website: </span>{userCard.website}</p>
              <p><span>Empresa: </span>{userCard.company.name}</p>
              <p><span>Frase de efeito: </span>{userCard.company.catchPhrase}</p>
              <p><span>Objetivo: </span>{userCard.company.bs}</p>
            </CardUserInfo>
          </CardUser>
        ))}
      </Content>
    </Container>
  );
}

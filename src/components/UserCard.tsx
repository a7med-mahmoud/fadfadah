import * as React from 'react';
import { useContext } from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import VerifiedIcon from './icons/Verified';
import MiniUser from '../types/MiniUser';
import Share from './Share';
import Block from './Block';
import { AuthContext } from '../store/AuthContext';
import {
  BsFillPersonDashFill,
  BsThreeDotsVertical
} from 'react-icons/bs';
import { MdShare } from 'react-icons/md';

export interface ShareActivatorProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
const ShareActivator: React.FC<ShareActivatorProps> = ({ setShow }) => (
  <Dropdown.Item className="d-inline-flex" onClick={() => setShow(true)}>
    <p className="ml-auto mb-0">مشاركة</p>
    <MdShare size="1.2em" />
  </Dropdown.Item>
);

export interface BlockActivatorProps {
  block: () => void;
}
const BlockActivator: React.FC<BlockActivatorProps> = ({ block }) => (
  <Dropdown.Item className="d-inline-flex" onClick={() => block()}>
    <p className="ml-auto mb-0">حظر</p>
    <BsFillPersonDashFill size="1.2em" />
  </Dropdown.Item>
);

export interface UserCardProps {
  user: MiniUser;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const { protocol, host } = window.location;
  const link = `${protocol}//${host}/u/${user.username}`;

  const { username } = useContext(AuthContext)!;

  return (
    <Card className="mb-2">
      <Card.Body className="d-flex user-data">
        <div className="d-flex align-items-center flex-grow-1">
          <img
            src={
              user.photoURL &&
              user.photoURL !== 'null' &&
              user.photoURL !== 'undefined'
                ? user.photoURL
                : '/images/avatar.svg'
            }
            alt={user.displayName ?? 'لا يوجد اسم'}
            className="rounded-circle shadow-sm"
            style={{ width: 55, height: 55 }}
          />
          <div className="mr-3">
            <Card.Title>
              <h5>
                {user.displayName ?? 'لا يوجد اسم'}
                {user.verified && (
                  <VerifiedIcon size="18px" className="text-primary mr-2" />
                )}
              </h5>
            </Card.Title>
            {user.username && <Card.Subtitle className="text-muted">@{user.username}</Card.Subtitle>}
          </div>
        </div>

        <Dropdown>
          <Dropdown.Toggle variant="text-dark">
            <BsThreeDotsVertical size="1em" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Share activator={ShareActivator} link={link} />
            {username && user.username !== username && (
              <Block activator={BlockActivator} id={user.username ?? ''} type="username" />
            )}
          </Dropdown.Menu>
        </Dropdown>
      </Card.Body>
    </Card>
  );
};

export default UserCard;

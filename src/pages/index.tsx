import React from 'react';
import '../styles/theme.scss';
import { AccountForm } from '../components/AccountForm';

const IndexPage = () =>
  <div className="background-page">
    <AccountForm />
  </div>
IndexPage.displayName = 'Index Page';
export default IndexPage;

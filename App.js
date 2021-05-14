import React, {Component} from 'react';

import {TeaNavigator, Theme} from 'teaset';
import TeasetExampleHome from './src/views/Home';

export default class App extends Component<{}> {
  render() {
    return <TeaNavigator rootView={<TeasetExampleHome />} />;
  }
}

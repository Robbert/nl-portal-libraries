import * as React from 'react';
import {Button} from '@gemeente-denhaag/denhaag-component-library';
import {FormattedMessage} from 'react-intl';

const Menu = () => (
  <Button>
    <FormattedMessage id="header.menuButton" />
  </Button>
);
export {Menu};

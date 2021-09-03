import * as React from 'react';
import {FC, useContext} from 'react';
import {LocaleContext} from '@nl-portal/localization';
import {Link, useLocation} from 'react-router-dom';
import classNames from 'classnames';
import {FormattedMessage} from 'react-intl';
import {BadgeCounter} from '@gemeente-denhaag/denhaag-component-library';
import {PortalPage} from '../../interfaces';
import styles from './menu-item.module.scss';
import {LayoutContext} from '../../contexts';

interface MenuItemProps {
  item: PortalPage;
}

const MenuItem: FC<MenuItemProps> = ({item}) => {
  const {hrefLang} = useContext(LocaleContext);
  const {hideMenu, messagesCount} = useContext(LayoutContext);
  const location = useLocation();

  return (
    <Link
      to={item.path}
      onClick={hideMenu}
      hrefLang={hrefLang}
      className={classNames('denhaag-menu-button', styles['denhaag-menu-button--flex'], {
        'denhaag-menu-button--active': location.pathname === item.path,
      })}
    >
      {item.icon && <div className={styles['denhaag-menu-button__icon']}>{item.icon}</div>}
      <FormattedMessage id={`pageTitles.${item.titleTranslationKey}`} />
      {item.showMessagesCount && (
        <div className={styles['denhaag-menu-button__counter']}>
          <BadgeCounter>{messagesCount}</BadgeCounter>
        </div>
      )}
    </Link>
  );
};

export {MenuItem};

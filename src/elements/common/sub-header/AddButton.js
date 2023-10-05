/**
 * @flow
 * @file Add Button component
 * @author Box
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { IconButton, Tooltip } from '@box/blueprint-web';
import IconAddThin from '../../../icons/general/IconAddThin';
import messages from '../messages';
import './AddButton.scss';

const AddButton = (props: ?Object) => (
    <Tooltip content={<FormattedMessage {...messages.add} />}>
        <IconButton aria-label={messages.add.defaultMessage} type="button" {...props} icon={<IconAddThin />} />
    </Tooltip>
);

export default AddButton;

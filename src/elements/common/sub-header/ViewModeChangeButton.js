// @flow

import React from 'react';
import { injectIntl } from 'react-intl';
import type { InjectIntlProvidedProps } from 'react-intl';
import classNames from 'classnames';
import noop from 'lodash/noop';

import { IconButton, Tooltip } from '@box/blueprint-web';
import IconGridViewInverted from '../../../icons/general/IconGridViewInverted';
import IconListView from '../../../icons/general/IconListView';
import messages from '../messages';
// import Tooltip from '../Tooltip';
import type { ViewMode } from '../flowTypes';
import { VIEW_MODE_GRID, VIEW_MODE_LIST } from '../../../constants';
// import { bdlGray65 } from '../../../styles/variables';
import './ViewModeChangeButton.scss';

type Props = {
    className?: string,
    onViewModeChange?: (viewMode: ViewMode) => void,
    viewMode: ViewMode,
} & InjectIntlProvidedProps;

const ViewModeChangeButton = ({ className = '', onViewModeChange = noop, intl, viewMode, ...rest }: Props) => {
    const isGridView = viewMode === VIEW_MODE_GRID;
    const viewMessage = isGridView ? intl.formatMessage(messages.listView) : intl.formatMessage(messages.gridView);
    const onClick = () => {
        onViewModeChange(isGridView ? VIEW_MODE_LIST : VIEW_MODE_GRID);
    };

    return (
        <Tooltip content={viewMessage}>
            <IconButton
                aria-label={viewMessage}
                data-testid="view-mode-change-button"
                className={classNames('bdl-ViewModeChangeButton', className)}
                type="button"
                onClick={onClick}
                icon={
                    isGridView ? (
                        <IconListView width={17} height={17} />
                    ) : (
                        <IconGridViewInverted width={17} height={17} />
                    )
                }
                {...rest}
            />
        </Tooltip>
    );
};

export default injectIntl(ViewModeChangeButton);

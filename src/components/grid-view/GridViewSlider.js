// @flow
import * as React from 'react';
import { injectIntl } from 'react-intl';
import type { InjectIntlProvidedProps } from 'react-intl';
import { Slider } from '@box/blueprint-web';
import messages from '../../elements/common/messages';
import './GridViewSlider.scss';

type Props = {
    columnCount: number,
    gridMaxColumns: number,
    gridMinColumns: number,
    maxColumnCount: number,
    onChange: (newSliderValue: number) => void,
} & InjectIntlProvidedProps;

const GridViewSlider = ({ columnCount, gridMaxColumns, gridMinColumns, intl, maxColumnCount, onChange }: Props) => {
    const { formatMessage } = intl;
    const RANGE_STEP = 1;

    // This math is necessary since the highest value of the slider should result in
    // the lowest number of columns
    const RANGE_MIN = gridMaxColumns - maxColumnCount + 1;
    const RANGE_MAX = gridMaxColumns - gridMinColumns + 1;
    const sliderValue = RANGE_MAX - columnCount + 1;

    return (
        gridMinColumns < maxColumnCount && (
            <div className="bdl-GridViewSlider">
                <Slider
                    minusButtonLabel={formatMessage(messages.gridViewDecreaseColumnSize)}
                    plusButtonLabel={formatMessage(messages.gridViewIncreaseColumnSize)}
                    sliderLabel={formatMessage(messages.gridViewColumnSize)}
                    value={sliderValue}
                    min={RANGE_MIN}
                    max={RANGE_MAX}
                    step={RANGE_STEP}
                    onValueChange={event => {
                        onChange(event.currentTarget.valueAsNumber);
                    }}
                />
            </div>
        )
    );
};

export { GridViewSlider as GridViewSliderBase };
export default injectIntl(GridViewSlider);

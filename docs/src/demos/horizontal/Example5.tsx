import React, { Component } from 'react';
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider';
import ValueViewer from '../ValueViewer';
import { SliderRail, Handle, Track, Tick } from './components';

const sliderStyle = {
  position: 'relative' as 'relative',
  width: '100%',
};

const defaultValues = [200, 2000];

interface SliderState {
  domain: ReadonlyArray<number>;
  values: ReadonlyArray<number>;
  update: ReadonlyArray<number>;
  reversed: boolean;
}

export class Example5 extends Component<{}, SliderState> {
  state = {
    domain: [100, 165000],
    values: defaultValues.slice(),
    update: defaultValues.slice(),
    reversed: false,
  };

  onUpdate = (update: ReadonlyArray<number>) => {
    this.setState({ update });
  };

  onChange = (values: ReadonlyArray<number>) => {
    this.setState({ values });
  };

  setDomain = (domain: number[]) => {
    this.setState({ domain });
  };

  toggleReverse = () => {
    this.setState(prev => ({ reversed: !prev.reversed }));
  };

  render() {
    const {
      state: { domain, values, update, reversed },
    } = this;

    return (
      <div style={{ height: 150, width: '100%' }}>
        <button
          onClick={() => {
            this.onChange([0, 165000]);
            this.onUpdate([0, 165000]);
          }}
        >
          SET VALUES [0, 165000]
        </button>
        <button
          onClick={() => {
              this.onChange([500, 7000]);
              this.onUpdate([500, 7000]);
          }}
        >
          SET VALUES [500, 7000]
        </button>
        <button
          onClick={() => {
              this.onChange([50000, 100000]);
              this.onUpdate([50000, 100000]);
          }}
        >
          SET VALUES [50000, 100000]
        </button>
        <button onClick={() => this.toggleReverse()}>
          {reversed ? 'DISPLAY LOW TO HIGH' : 'DISPLAY HIGH TO LOW'}
        </button>
        <ValueViewer values={values} update={update} />
        <Slider
          mode={2}
          step={100}
          domain={domain}
          reversed={reversed}
          rootStyle={sliderStyle}
          onUpdate={this.onUpdate}
          onChange={this.onChange}
          values={values}
        >
          <Rail>
            {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map(handle => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    domain={domain}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks left={false} right={false}>
            {({ tracks, getTrackProps }) => (
              <div className="slider-tracks">
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </div>
            )}
          </Tracks>
          <Ticks count={4}>
            {({ ticks }) => (
              <div className="slider-ticks">
                {ticks.map(tick => (
                  <Tick key={tick.id} tick={tick} count={ticks.length} />
                ))}
              </div>
            )}
          </Ticks>
        </Slider>
      </div>
    );
  }
}

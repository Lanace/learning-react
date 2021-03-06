import React, {Component} from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
    onRemove: () => {
      console.warn('onRemove is not defined')
    },
    onUpdate: () => {
      console.warn('onUpdate is not defined')
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.data !== this.props.data
  }

  render() {
    const {data, onRemove, onUpdate} = this.props;
    const list = data.map(info => {
      return <PhoneInfo key={info.id} info={info} onRemove={onRemove} onUpdate={onUpdate}/>
    });

    return (
      <div>
        {list}
      </div>
    )
  }
}

export default PhoneInfoList;

import React, { Component } from 'react';


const data = {
    "Ivel Z3": {
      manufacturer: "Ivasim",
      year: 1969,
      origin: "Croatia"
    },
    "Bally Astrocade": {
      manufacturer: "Bally Consumer Products",
      year: 1977,
      origin: "USA"
    },
    "Sord M200 Smart Home Computer": {
      manufacturer: "Sord Computer Corporation",
      year: 1971,
      origin: "Japan"
    },
    "Commodore 64": {
      manufacturer: "Commodore",
      year: 1982,
      origin: "USA"
    }
  }

class DeviceList extends Component {
    render() {
        const options = Object.keys(data).map(key => {
            const content = key + " ("+data[key].year+")"
            return (
                <option value={key}>{content}</option>
            )
        })

        return (
            <div>
            <select>
                <option value="">-- pick a model --</option>
                {options}
            </select>
            <button>Add</button>
            </div>
        )
    }

}

export default DeviceList
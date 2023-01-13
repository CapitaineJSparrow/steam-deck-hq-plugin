import { FaPlug, FaThermometerFull, FaClock } from "react-icons/fa";

interface Props {
  battery: string;
  temps: string;
  duration: string;
}

const BatteryUsage = (props: Props) => (
  <table style={{ width: '100%' }}>
    <tr>
      <td style={{ width: '112px' }}><FaPlug /></td>
      <td style={{ textAlign: 'right' }}><b>{props.battery}</b></td>
    </tr>
    <tr>
      <td style={{ width: '112px' }}><FaThermometerFull /></td>
      <td style={{ textAlign: 'right' }}><b>{props.temps}</b></td>
    </tr>
    <tr>
      <td style={{ width: '112px' }}><FaClock /></td>
      <td style={{ textAlign: 'right' }}><b>{props.duration}</b></td>
    </tr>
  </table>
);

export default BatteryUsage;
interface Props {
  fpsCap: string;
  refreshRate: number;
  tdp: string;
  scaling: string;
  gpuClock: string;
  protonVersion: string;
}

const SteamOSSettings = (props: Props) => (
  <table style={{ width: '100%' }}>
    <tr>
      <td style={{ width: '112px' }}>FPS Cap</td>
      <td style={{ textAlign: 'right' }}><b>{props.fpsCap}</b></td>
    </tr>
    <tr>
      <td style={{ width: '112px' }}>Refresh Rate</td>
      <td style={{ textAlign: 'right' }}><b>{props.refreshRate}</b></td>
    </tr>
    <tr>
      <td style={{ width: '112px' }}>TDP Limit</td>
      <td style={{ textAlign: 'right' }}><b>{props.tdp}</b></td>
    </tr>
    <tr>
      <td style={{ width: '112px' }}>Scaling Filter</td>
      <td style={{ textAlign: 'right' }}><b>{props.scaling}</b></td>
    </tr>
    <tr>
      <td style={{ width: '112px' }}>GPU Clock</td>
      <td style={{ textAlign: 'right' }}><b>{props.gpuClock}</b></td>
    </tr>
    <tr>
      <td style={{ width: '112px' }}>Proton Version</td>
      <td style={{ textAlign: 'right' }}><b>{props.protonVersion}</b></td>
    </tr>
  </table>
);

export default SteamOSSettings;
import {
  Button
} from "decky-frontend-lib";

const FocusableTitle = ({ label, onClick }: { label: string, onClick?: Function }) => (
  <Button
    style={{ background: 'transparent', width: '100%', color: '#FFF', fontWeight: 'bold', border: 0, fontSize: '18px' }}
    onClick={e => {onClick && onClick(e)}}
  >
    { label }
  </Button>
)

export default FocusableTitle;
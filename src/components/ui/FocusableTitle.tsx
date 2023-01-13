import {
  Button
} from "decky-frontend-lib";

const FocusableTitle = ({ label }: { label: string }) => (
  <Button style={{ background: 'transparent', width: '100%', color: '#FFF', fontWeight: 'bold', border: 0, fontSize: '18px' }}>
    { label }
  </Button>
)

export default FocusableTitle;
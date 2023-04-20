import Button from "../components/Button";
import { GoBell } from "react-icons/go";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button secondary className="mb-5">
          <GoBell />
          Primary
        </Button>
      </div>
      <div>
        <Button secondary>Secondary</Button>
      </div>
      <div>
        <Button success rounded>
          Success
        </Button>
      </div>
      <div>
        <Button warning>Warning</Button>
      </div>
      <div>
        <Button danger>Danger</Button>
      </div>
    </div>
  );
}

export default ButtonPage;

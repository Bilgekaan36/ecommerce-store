import getBillboard from "@/actions/get-billboard";
import { Billboard } from "@/components/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const data = await getBillboard("b5c2dd5c-12b0-4232-a174-09a3013c2d39");

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={data} />
      </div>
    </Container>
  );
};

export default HomePage;

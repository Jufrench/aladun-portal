import { getAllCustomers } from "@/app/lib/data";

export default async function AllCustomers() {
    // const handleGetCustomers = async () => {
  //   const customers = await getCustomers();
  //   console.log('%cNeed to get data from the server side, then pass to frontend', 'color:deepskyblue')
  //   console.log('%ccustomers:', 'color:limegreen', customers);
  // };

  // const customers = await getCustomers();

  // console.log('/// customers:', customers);

  // let customers: any[] = [];
  // useEffect(() => {

  // }, [customers.length])

  // const fetchCustomers = async () => {
  //   await getCustomers().then((result: any) => {
  //     console.log('result:', result)
  //     setCustomers(result);
  //   });
  // }

  // const [customers, setCustomers] = useState([]);
  // const fetchCustomers = async () => {
  //   await getCustomers().then((result: any) => {
  //     console.log('result:', result)
  //     setCustomers(result);
  //   });
  // }
  
  // return (
  //   <div style={{textAlign: 'center'}}>
  //     <button onClick={fetchCustomers}>Get Customers</button>
  //     <hr style={{width: "100%", margin: "10px 0"}} />
  //     {!customers ?
  //       <div>Click button to get all customers</div> :
  //       <ul>
  //         {customers.map((customer: any) => {
  //           return (
  //             <li>{customer.givenName}</li>
  //           )
  //         })}
  //       </ul>
  //     }
  //   </div>
  // )
  const customers = await getAllCustomers()
    .then(result => {
      return result;
    });

  return (
    <div style={{textAlign: 'center'}}>
      Customer List
      <ul>
        {customers.map((customer: any) => {
          return (
            <li>{customer.givenName}</li>
          )
        })}
      </ul>
    </div>
  )
}
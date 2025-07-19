type User =  {
    name: string;
    age: number;
}

const Ranul = {
    name: "Ranul Jayawardena",
    age: 26, 
} satisfies User;

function resolveAfter2Seconds(x: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

export function returnName() {
  return (Ranul.name)
}

export function returnAge() {
  return (Ranul.age)
}

export async function Data()
{
      await resolveAfter2Seconds(10)
     
    return ( "A self-directed, ambitious and focused IT professional with a broad knowledge and experience base, including current" + 
        "technologies. Core strengths are in technical troubleshooting, programming, driving technological change and an ability" + 
        "to iterate and innovate. Passionate about technology and committed to growing and developing skills and experience." + 
        "Participated in cutting edge university-level projects which were successfully completed. A lateral thinker who constantly" + 
        "seeks to find if there is a better way to resolve problems or complete projects. Offers customer-centric support with" +
        "customised solutions that improve the end user experience."
    )
}
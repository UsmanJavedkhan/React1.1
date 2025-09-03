export function Collegedata({college}) {

    return(
        
        <div style={{
            border:"1px solid black",
            margin:"10px",
        }}>
            <ul style={{
                listStyleType:"none",}}>
                <li>Name:{college.name}</li>
                <li>Location:{college.location}</li>
                <li>Website:{college.website}</li>
            </ul>
            <h3>Students</h3>
            {
                college.student.map((stud,index) => (
                    <div key={index}>
                        <ul>
                            <li>Name:{stud.name}</li>
                            <li>Age:{stud.age}</li>
                        </ul>
                    </div>
                ))
            }
            

        </div>
    );
}
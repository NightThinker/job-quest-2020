import Main from '../../shared/theme/Main'



const Marathon = () => {
  const question = [
    {
      question: 'Folder Structure ที่จะใช้ในการจัดวาง',
      answer: ['ขอเก็บไว้ใน Folder feature/marathon']
    },
    {
      question: 'Library ที่คาดว่าจะใช้สำหรับ Project นี้ พร้อมทั้งระบุด้วยว่าทำไมถึงเลือกใช้',
      answer: ['react-dropzone ใช้ในการอัพโหลดไฟล์รูป', 'lodash ใช้ในการจัดการข้อมูล', 'react-select ใช้ในการทำcomponent select',
        'ถ้าเน้นความสวยงามก็ใช้ react-timekeeper ในการชั่วโมงและนาทีคาดว่าจะจบในการวิ่งครั้งนี้', 'dayjs ใช้จัดการข้อมูลเกี่ยวกับเวลา',
        'react-hook-form  กับ  yup ใช้จัดการ Validate Form']
    },
    {
      question: 'จะต้องจัดการ State ของข้อมูลอย่างไร เพื่อรองรับกับโจทย์นี้ได้',
      answer: ['สร้าง cumtomer hook ไว้เก็บ State สร้าง function สำหรับ onChangeInput ทั้งหมดรวมไว้แค่ 1 function แล้วก็เช็คจาก type ของ input']
    },
    {
      question: 'จะใช้วิธีใดในการ Validate Form สำหรับการ Save Draft และสำหรับการ Submit',
      answer: ['ตอนที่กด Save Draft ไม่ต้องเช็ค Validate', 'ตอนที่กด Step ถัดไป ต้องเช็ค Validate', 'ถ้าใช้ Library react-hook-form  กับ  yup สามารถจัดการได้ตามที่ตอบไว้ในข้อนี้ได้อย่างง่ายดาย']
    },
  ]
  return (
    <Main>
      <ul className='flex flex-col gap-2'>
        {question.map(i => (
          <li className=' border-2 border-gray-100 p-3 rounded-md shadow-md'>
            <p className='text-xl mb-2 text-gray-900'>{i.question}</p>
            {i.answer.map(m => (
              <p className='text-gray-600' key={m}>{m}</p>
            ))}
          </li>
        ))}
      </ul>
    </Main>
  )
}

export default Marathon
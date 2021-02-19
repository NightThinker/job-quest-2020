



const Marathon = () => {
  return <div>
    <ul>
      <li><p className='bg-gray-50'>Folder Structure ที่จะใช้ในการจัดวาง ** </p><p>ขอเก็บไว้ใน Folder feature/marathon </p></li>
      <li><p>Library ที่คาดว่าจะใช้สำหรับ Project นี้ พร้อมทั้งระบุด้วยว่าทำไมถึงเลือกใช้</p>
        <p>- react-dropzone ใช้ในการอัพโหลดไฟล์รูป, lodash ใช้ในการจัดการข้อมูล, react-select ใช้ในการทำcomponent select,
        ถ้าเน้นความสวยงามก็ใช้ react-timekeeper ในการชั่วโมงและนาทีคาดว่าจะจบในการวิ่งครั้งนี้,
        dayjs ใช้จัดการข้อมูลเกี่ยวกับเวลา
          react-hook-form  กับ  yup ใช้จัดการ Validate Form </p></li>
      <li><p>จะต้องจัดการ State ของข้อมูลอย่างไร เพื่อรองรับกับโจทย์นี้ได้ **</p>
        <p>สร้าง cumtomer hook ไว้เก็บ State สร้าง function สำหรับ onChangeInput ทั้งหมดรวมไว้แค่ 1 function แล้วก็เช็คจาก type ของ input</p></li>
      <li><p>จะใช้วิธีใดในการ Validate Form สำหรับการ Save Draft และสำหรับการ Submit</p>
        <p>ตอนที่กด Save Draft ไม่ต้องเช็ค Validate</p>
        <p>ตอนที่กด Step ถัดไป ต้องเช็ค Validate</p>
        <p>ถ้าใช้ Library react-hook-form  กับ  yup สามารถจัดการได้ตามที่ตอบไว้ในข้อนี้ได้อย่างง่ายดาย</p></li>
    </ul>
  </div>
}

export default Marathon
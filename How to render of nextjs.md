## Render của CSR thuần:
1. Gửi request lên server khi client lần đầu truy cập trang.
2. Server response 1 file html chứa thẻ div rỗng và kèm liên kết với file js
3. Trình duyệt sẽ đọc và gửi request lần 2 để tải file js, css về 
4. trình duyệt sẽ thực thi file js, css và cập nhật render lại file html cũng như gắn sự kiện
5. Vì đã tải hết các file js về rồi nên Khi cần data chỉ cần gửi request lên thôi. 

=> Không tốt cho SEO, lần đầu tải lâu hơn nhưng navigate thì lại nhanh

## Render của SSR thuần"
1. Gửi request lên server
2. Server sẽ thực thi file js và thực hiện render ra html sẵn (có css, các sự kiện ...)
3. Server trả về html và css cho client và trình duyệt hiển thị ra dùng thôi
4. Nhưng những lần navigation sau thì lại lâu vì phải gửi request lại lên sv mới có html, css trả về để dùng.
 
=> Tốt cho SEO, lần đầu load nhanh nhưng navigate lại lâu, nặng tải cho máy chủ vì phải render lien tục nhưng tốt cho UI, UX của user.

## Render ở cả SV and CL của nextjs thì:
=> Vừa tốt cho seo vừa navigate nhanh ở lần thứ 2 và vừa đỡ tải cho máy khách và cả máy chủ nữa.
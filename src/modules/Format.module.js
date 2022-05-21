function formatPrice(price) {
    return price.toString()
        .replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
}

function formatDate(date, language) {
    if (language == 'vi') {
        const dateFormat = new Date(date);
        const getDay = dateFormat.getDay();
        let thu;

        switch (getDay) {
            case 0:
                thu = 'Chủ nhật';
                break;
            case 1:
                thu = 'Thứ hai';
                break;
            case 2:
                thu = 'Thứ ba';
                break;
            case 3:
                thu = 'Thứ tư'
                break;
            case 4:
                thu = 'Thứ năm';
                break;
            case 5:
                thu = 'Thứ sáu';
                break;
            case 6:
                thu = 'Thứ bảy';
                break;
            default:
                thu = 'Đang cập nhật';
                break;
        };
        const textDate = `${thu} - ${dateFormat.getDate() < 10 ? '0' + dateFormat.getDate() : dateFormat.getDate()} th ${dateFormat.getMonth()+1 < 10 ? '0' + (dateFormat.getMonth()+1) : dateFormat.getMonth()+1}, ${dateFormat.getFullYear()} ${dateFormat.getHours() < 10 ? '0' + dateFormat.getHours() : dateFormat.getHours()}:${dateFormat.getMinutes() < 10 ? '0' + dateFormat.getMinutes() : dateFormat.getMinutes()}`;
        return textDate;
    } else {
        const dateFormat = new Date(date);
        return dateFormat.toLocaleDateString("en-US");
    }
}

function formatTime(date) {
    const dateNew = new Date(date);
    const dateTime = `${dateNew.getHours() < 10 ? '0' + dateNew.getHours() : dateNew.getHours()}:${dateNew.getMinutes() < 10 ? '0' + dateNew.getMinutes() : dateNew.getMinutes()}`;
    return dateTime;
}

function formatDate_r(date) {
    const dateNew = new Date(date);
    const dateTime = `${dateNew.getDate() < 10 ? '0' + dateNew.getDate() : dateNew.getDate()}-${dateNew.getMonth()+1 < 10 ? '0' + (dateNew.getMonth()+1) : dateNew.getMonth()+1}-${dateNew.getFullYear()}`;
    return dateTime;
}

function formatDeleteCharacter(content) {
    return content.replace(/\D/g, "");
}

module.exports = {
    formatPrice,
    formatDate,
    formatDeleteCharacter,
    formatTime,
    formatDate_r
}
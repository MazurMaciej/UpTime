export const getSortedData = (dataToSort, reverse) => (

    reverse ? dataToSort?.sort((firstElement, secondElement) => new Date(firstElement.date) - new Date(secondElement.date))
        : dataToSort?.sort((firstElement, secondElement) => new Date(secondElement.date) - new Date(firstElement.date)));

export const getSumOfData = (userData, factor) => userData?.reduce((sum, singleDay) => sum + singleDay[factor], 0);

export const daysToFilter = {
    '30': 31,
    '14': 15,
    '7': 8
};

export const getFilteredData = (days, handleUserData, selectedUserData) => {
    const dateNow = new Date();
    const startDate = new Date(dateNow.setDate(dateNow.getDate() - days)).toISOString()

    const endDate = new Date().toISOString();
    const filteredData = selectedUserData.filter(singleDayData => singleDayData.date >= startDate && singleDayData.date <= endDate)
    handleUserData(getSortedData(filteredData))
};

export const getConvertedDate = date => (new Date(date)).toLocaleDateString();

export const getDividedNumbers = number => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");



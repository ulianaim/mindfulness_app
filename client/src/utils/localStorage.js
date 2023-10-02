export const getQuoteIds = () => {
    const quoteIds = localStorage.getItem('quotes')
      ? JSON.parse(localStorage.getItem('quotes'))
      : [];
  
    return quoteIds;
  };
  
  export const saveQuoteIds = (quoteIdArr) => {
    if (quoteIdArr.length) {
      localStorage.setItem('quotes', JSON.stringify(quoteIdArr));
    } else {
      localStorage.removeItem('quotes');
    }
  };
  
  export const removeQuoteId = (quoteIdToRemove) => {
    const quoteIds = localStorage.getItem('quotes')
      ? JSON.parse(localStorage.getItem('quotes'))
      : null;
  
    if (!quoteIds) {
      return false;
    }

const updatedQuoteIds = quoteIds?.filter((quoteId) => quoteId !== quoteIdToRemove);
  localStorage.setItem('quotes', JSON.stringify(updatedQuoteIds));
  
    return true;
  };
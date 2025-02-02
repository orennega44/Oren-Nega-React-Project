export function SearchBar(searchQuery, data) {




    const result = data.filter((card) => {
        if (!card) return false;

        const searchableText = [
            card.title,
            card.subtitle,
            card.description,
            card.address?.state,
            card.address?.country,
            card.address?.city,
            card.address?.street,
            card.address?.houseNumber,
        ]
            .filter(Boolean).join(" ");



        

        return searchableText.includes(searchQuery);
    });




    return result;

}


package com.revature.dao;

import java.util.List;

import com.revature.beans.FlashCard;

public interface FlashCardDao {
	public void createFlashCard(FlashCard flashCard);
	public FlashCard getSingleFlashCard();
	public List<FlashCard> getAllFlashCard();
}

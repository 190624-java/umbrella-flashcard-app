package com.revature.daoImp;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

import com.revature.beans.FlashCard;
import com.revature.dao.FlashCardDao;

public class FlashCardDoaImpl implements FlashCardDao {

	@Override
	public void createFlashCard(FlashCard flashCard) {
		try (Connection conn = ConnectionFactory.getConnection()) {
			String sql = "INSERT INTO fc_flashcard(front, back) "
					+ "VALUES (?, ?)";
			PreparedStatement stmt = conn.prepareStatement(sql);
			stmt.setString(1, flashCard.getFront());
			stmt.setString(2, flashCard.getBack());
			stmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	@Override
	public FlashCard getSingleFlashCard() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<FlashCard> getAllFlashCard() {
		// TODO Auto-generated method stub
		return null;
	}
	
}

using Microsoft.EntityFrameworkCore.Migrations;

namespace Meniu.Data.Migrations
{
    public partial class mod1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderFood_Food_Foodid",
                table: "OrderFood");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "OrderFood",
                newName: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderFood_FoodRequest_Foodid",
                table: "OrderFood",
                column: "Foodid",
                principalTable: "FoodRequest",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderFood_FoodRequest_Foodid",
                table: "OrderFood");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "OrderFood",
                newName: "ID");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderFood_Food_Foodid",
                table: "OrderFood",
                column: "Foodid",
                principalTable: "Food",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
